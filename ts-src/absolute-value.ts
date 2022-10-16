import {AwaitEvaluation, ExecutionContextI, LoggerAdapter} from '@franzzemen/app-utility';
import {EnhancedError, logErrorAndThrow} from '@franzzemen/app-utility/enhanced-error.js';

export const abs: AwaitEvaluation =  function abs(dataDomain: any, scope: Map<string, any>, ec?: ExecutionContextI, ...params: any[]) : Promise<number | BigInt> | number | BigInt {
  if (params && params.length === 1) {
    const typeOf = typeof params[0];
    if(typeOf === 'number') {
      return Math.abs(params[0]);
    } else if (typeOf === 'bigint') {
      if(params[0] < 0n) {
        return params[0] * -1n;
      }
    } else {
      const log = new LoggerAdapter(ec, 're-standard-functions', 'absolute-value', 'abs');
      logErrorAndThrow(new EnhancedError('Params is not a number'), log, ec);
    }
  }
}
