import * as React from 'react';
import Loading from './loading';

type TNameProps = {
  params: {
    name: string;
  };
};

const Name: React.FC<TNameProps> = ({ params }) => {

  return <React.Suspense fallback={<Loading />}>
    <h1>Hello, {params.name}!</h1>
  </React.Suspense>;
}

export default Name;
