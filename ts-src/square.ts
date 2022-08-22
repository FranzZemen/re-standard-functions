import {ExecutionContextI} from '@franzzemen/app-utility';
import {AwaitEvaluation} from '@franzzemen/re-expression';
import {unaryMathFunction} from './unaryMathFunction';

export function squareFactory(...params): AwaitEvaluation {
  // const log = new LoggerAdapter(params[params.length-1], 'rules-engine-functions', 'square', 'squareFactory');
  // log.info(`Execution Context is ${params[0]}`)
  return square;
}

function sqr(x: number): number {
  return x * x;
}


export const square: AwaitEvaluation =  function square(dataDomain: any, scope: Map<string, any>, ec?: ExecutionContextI, ...params: any[]) : number {
  return unaryMathFunction(sqr, params, ec);
}
