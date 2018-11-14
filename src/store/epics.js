import { ajax } from 'rxjs/ajax';
import { pipe, map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
//pipe unused. why?

const fetchBlocksEpic = action$ => action$.pipe(
  ofType('REQUEST_BLOCKS'),
  mergeMap(action =>
    ajax.getJSON(`https://blockchain.info/blocks/${Date.now()}?format=json`).pipe(
      map(response => ({
        type:'RECEIVE_BLOCKS',
        blocks: response.blocks,
      }))
    )
  )
);

export { fetchBlocksEpic };
