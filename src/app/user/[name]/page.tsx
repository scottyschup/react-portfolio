import * as React from 'react';

type TNameProps = {
  params: {
    name: string;
  };
};

const Name: React.FC<TNameProps> = ({ params }) => {

  return <h1>Hello, {params.name}!</h1>
}

export default Name;
