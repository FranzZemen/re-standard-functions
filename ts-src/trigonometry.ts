import {ExecutionContextI, LoggerAdapter} from '@franzzemen/app-utility';
import {AwaitEvaluation} from '@franzzemen/app-utility/await-evaluation';
import {unaryMathFunction} from './unaryMathFunction';

export function cosFactory(...params): AwaitEvaluation {
  return cos;
}

export function sinFactory(...params): AwaitEvaluation {
  return sin;
}


export function tanFactory(...params): AwaitEvaluation {
  return tan;
}


export function acosFactory(...params): AwaitEvaluation {
  return acos;
}


export function asinFactory(...params): AwaitEvaluation {
  return asin;
}


export function atanFactory(...params): AwaitEvaluation {
  return atan;
}

function trig (trigFunc: (number) => number, params: any[], ec?: ExecutionContextI): number {
  if(params && params.length === 1 && Array.isArray(params[0]) && params[0].length === 1 && typeof params[0][0] === 'number') {
    const radians = [params[0][0] * Math.PI / 180.0];
    return unaryMathFunction(trigFunc, [radians], ec);
  } else {
    const log = new LoggerAdapter(ec, 'rules-engine', 'trigonometry', 'trig');
    const err = new Error ('Not a number, no number, or no params');
    log.error(err);
    throw (err);
  }
}

export const cos: AwaitEvaluation =  function cos(dataDomain: any, scope: Map<string, any>, ec?: ExecutionContextI, ...params: any[]) : Promise<number> | number {
  return trig(Math.cos, params, ec);
}

export const sin: AwaitEvaluation =  function sin(dataDomain: any, scope: Map<string, any>, ec?: ExecutionContextI, ...params: any[]) : Promise<number> | number {
  return trig(Math.sin, params, ec);
}


export const tan: AwaitEvaluation =  function tan(dataDomain: any, scope: Map<string, any>, ec?: ExecutionContextI, ...params: any[]) : Promise<number> | number {
  return trig(Math.tan, params, ec);
}

export const acos: AwaitEvaluation =  function acos(dataDomain: any, scope: Map<string, any>, ec?: ExecutionContextI, ...params: any[]) : Promise<number> | number {
  return trig(Math.acos, params, ec);
}

export const asin: AwaitEvaluation =  function asin(dataDomain: any, scope: Map<string, any>, ec?: ExecutionContextI, ...params: any[]) : Promise<number> | number {
  return trig(Math.asin, params, ec);
}

export const atan: AwaitEvaluation =  function atan(dataDomain: any, scope: Map<string, any>, ec?: ExecutionContextI, ...params: any[]) : Promise<number> | number {
  return trig(Math.atan, params, ec);
}
