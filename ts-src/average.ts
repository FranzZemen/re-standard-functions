import {AwaitEvaluation, ExecutionContextI, LoggerAdapter} from '@franzzemen/app-utility';
import {sum} from './sum.js';

export function averageFactory(...params): AwaitEvaluation {
  // const log = new LoggerAdapter(params[params.length-1], 'rules-engine-functions', 'sum', 'sumFactory');
  // log.info(`Execution Context is ${params[0]}`)
  return average;
}


export const average: AwaitEvaluation =  function average(dataDomain: any, scope: Map<string, any>, ec?: ExecutionContextI, ...params: any[]) : Promise<number> | number {
  const log = new LoggerAdapter(ec, 'rules-engine-functions', 'sum', 'sum');
  let theSum = 0;
  if(!params || !params?.length) {
    const err = new Error('No params');
    log.error(err);
    throw err;
  }
  const sumParams = params[0];
  if(!sumParams || !Array.isArray(sumParams)) {
    const err = new Error('No sum parameter array');
    log.error(err);
    throw err;
  }
  sumParams.forEach(param => {
    if(param) {
      if (typeof param === 'number') {
        theSum += param;
      } else {
        log.warn('Non-numeric parameter encountered in function sum, ignoring');
      }
    } else {
      const err = new Error('Undefined paramater in function sum');
      log.error(err);
      throw err;
    }
  })
  return theSum / sumParams.length;
}
