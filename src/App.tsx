import React, { Suspense } from 'react';
import './App.css';
import Container from '@components/Container';
import { ErrorBoundary } from 'react-error-boundary';

const Button = React.lazy(() => import('federation_remote/Button'));

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <ErrorBoundary fallback={<p>error loading</p>}>
        <Suspense fallback={<p>loading</p>}>
          <Button />
        </Suspense>
      </ErrorBoundary>
      <Container>Local component</Container>
    </div>
  );
};

export default App;
