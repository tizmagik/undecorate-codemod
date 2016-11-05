export default function transformer(file, api) {
  const j = api.jscodeshift;

  const wrapInCall = (expression, toWrap) => j(
      j.callExpression(expression, [j.identifier(toWrap)])
    ).toSource();

  return j(file.source)
    .find(j.ClassDeclaration)
    .map(path => {
      // Make sure we have decorators
      if (!path.node.decorators ||
        path.node.decorators.length === 0) {
        return path;
      }

      // Clear the decorators
      const decorators = path.node.decorators;
      delete path.node.decorators;

      // Undecorate it by currying each decorator
      const undecorated =
        decorators.reduceRight(
          (acc, d) => wrapInCall(d.expression, acc),
          j(path).toSource()
        );

      // If it's the default export we can just swap in the undecorated version,
      // otherwise, we need to assign it to a new const declaration
      return path.replace(
        path.parentPath.node.type === 'ExportDefaultDeclaration'
        ? undecorated
        : `const ${path.node.id.name} = ${undecorated};`
      );
    })
    .toSource();
}
