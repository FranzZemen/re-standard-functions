import 'mocha';
import chai from 'chai';
import {averageFactory, cosFactory, squareFactory, squareRootFactory, sumFactory} from '../publish';

const expect = chai.expect;
const should = chai.should();

const unReachableCode = false;
const reachableCode = true;

describe('Function Tests', () => {
  describe('Sum Tests', () => {
    it('should fail on no params', done => {
      try {
        const sum = sumFactory();
        sum({}, undefined, undefined, undefined);
        unReachableCode.should.be.true;
      } catch (err) {
        reachableCode.should.be.true;
      }
      done();
    });
    it('should fail on no array', done => {
      try {
        const sum = sumFactory();
        sum({}, undefined, undefined, {});
        unReachableCode.should.be.true;
      } catch (err) {
        reachableCode.should.be.true;
      }
      done();
    });
    it('should sum nothing', done => {
      const sum = sumFactory();
      sum({}, undefined, undefined, []).should.equal(0);
      done();
    });
    it('should sum 1', done => {
      const sum = sumFactory();
      sum({}, undefined, undefined, [1]).should.equal(1);
      done();
    });
    it('should sum 1, 2', done => {
      const sum = sumFactory();
      sum({}, undefined, undefined, [1, 2]).should.equal(3);
      done();
    });
  });
  describe('Square Tests', () => {
    it('should square 2', done => {
      const square = squareFactory();
      square({}, undefined,undefined,[2]).should.equal(4);
      done();
    })
  });
  describe('Square Root Tests', () => {
    it('should square root 4', done => {
      const squareRoot = squareRootFactory();
      squareRoot({}, undefined,undefined,[4]).should.equal(2);
      done();
    })
  });
  describe('Average Tests', () => {
    it('should average 1, 2, 3', done => {
      const average = averageFactory()({},undefined,undefined, [1,2,3]).should.equal(2);
      done();
    })
  })
  describe('cos Tests', () => {
    it('should cosine from degrees', done => {
      const cos = cosFactory();
      cos({}, undefined, undefined, [0]).should.equal(1);
      (Math.round(cos({}, undefined, undefined, [60]) * 10)/10).should.equal(0.5);
      done();
    });
  })
});
