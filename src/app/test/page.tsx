import * as React from 'react';

type TTestProps = {
  name: string;
};

const TestComponent: React.FC<TTestProps> = ({ name = 'World' }) => {
  return <h1>Hello, {name}!</h1>
}

export default TestComponent;
