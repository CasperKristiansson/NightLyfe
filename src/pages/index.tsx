import { JssProvider } from 'react-jss';

export default function Index() {
  return (
    <>
      <JssProvider id={{ minify: true }}>
        <h1>Test</h1>
      </JssProvider>
    </>
  )
}
