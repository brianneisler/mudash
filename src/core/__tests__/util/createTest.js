import runTest from './runTest'
export default function createTest(description, context, factory) {
  return () => runTest(description, context, factory)
}
