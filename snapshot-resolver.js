/** resolves from test to snapshot path
 * @param {string} testPath
 * @param {string} snapshotExtension
 * @return {string} snapshotPath
 */
const resolveSnapshotPath = (testPath, snapshotExtension) =>
  testPath.replace("src/", "__snapshots__/") + snapshotExtension

/** resolves from snapshot to test path
 * @param {string} snapshotFilePath
 * @param {string} snapshotExtension
 * @return {string} testPath
 */
const resolveTestPath = (snapshotFilePath, snapshotExtension) =>
  snapshotFilePath
    .replace("__snapshots__/", "src/")
    .slice(0, -snapshotExtension.length)

module.exports = {
  resolveSnapshotPath,
  resolveTestPath,
  // Example test path, used for preflight consistency check of the implementation above
  testPathForConsistencyCheck: "src/components/level-filter.test.tsx",
}
