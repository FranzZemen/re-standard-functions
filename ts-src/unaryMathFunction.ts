import {ExecutionContextI, LoggerAdapter} from '@franzzemen/app-utility';


export const unaryMathFunction = (func: (param:any) => any, params: any[], ec?: ExecutionContextI) : number => {
  const log = new LoggerAdapter(ec, 'rules-engine-functions', 'single-param-functions', func.name);
  if (!params || !params?.length) {
    const err = new Error('No params');
    log.error(err);
    throw err;
  }
  const param = params[0];
  if (!param || !Array.isArray(param)) {
    const err = new Error('No parameter array');
    log.error(err);
    throw err;
  }
  if (param.length != 1) {
    const err = new Error('More than one value provided to function')
    log.error(err);
    throw err;
  }
  if (typeof param[0] != 'number') {
    const err = new Error('Cannot operate on non-numeric values');
    log.error(err);
    throw err;
  }
  return func(param[0]);
}

