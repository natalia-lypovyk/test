import React, { FC, useReducer } from 'react';
import Grid from 'ustudio-ui/components/Grid/Grid';
import Cell from 'ustudio-ui/components/Grid/Cell';

import { Main } from '../modules/main';
import { Form } from '../modules/main/Form';

import { reducer } from '../shared/reducer';
import { Context, initialState } from '../shared/context';

const App: FC = () => {
  const [{contacts}, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ contacts, dispatch }}>
      <Grid md={{ alignment: { horizontal: 'center'}}}>
        <Cell
          xl={{ size: 3 }}
          lg={{ size: 2 }}
        >
          <Main />
        </Cell>

        <Cell
          xl={{ size: 1 }}
        >
          <Form />
        </Cell>
      </Grid>
    </Context.Provider>
  );
}

export default App;
