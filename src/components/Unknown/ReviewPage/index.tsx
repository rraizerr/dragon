import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import DragonsInfo from '../DragonsInfo';
import dragonsApi from '../../../common/dragonsApi';

const dragons = dragonsApi;

export interface RouteParams {
  id: string;
  dragons: string;
}

function ReviewPage() {
  const { id } = useParams<RouteParams>();

  return (
    <>
      <Header />
      <DragonsInfo dragons={dragons} id={id} />
    </>
  );
}

export default ReviewPage;
