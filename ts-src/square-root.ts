import {ExecutionContextI} from '@franzzemen/app-utility';
import {AwaitEvaluation} from '@franzzemen/app-utility/await-evaluation';
import {unaryMathFunction} from './unaryMathFunction';

export function squareRootFactory(...params): AwaitEvaluation {
  return squareRoot;
}


export const squareRoot: AwaitEvaluation =  function squareRoot(dataDomain: any, scope: Map<string, any>, ec?: ExecutionContextI, ...params: any[]) : Promise<number> | number {
  return unaryMathFunction(Math.sqrt, params, ec);
}
