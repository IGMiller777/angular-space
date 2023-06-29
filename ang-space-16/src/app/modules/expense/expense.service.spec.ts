// import {of} from 'rxjs';
// import {ExpenseService} from "./expense.service";
// import * as url from "url";
//
// const usrId = '123';
// const mockExpense = {
//   expensedate: '01/01/2001',
//   expensetype: 'Fees',
//   expenseamt: 100,
//   expensedesc: 'Some desc',
//   expid: '456'
// };
//
// const responseTrue = {
//   success: true,
//   message: 'Expense updated successfully'
// };
//
// describe('Service: ExpenseService', () => {
//   let service: ExpenseService;
//   const http = jest.fn();
//
//   beforeEach(() => {
//     service = new ExpenseService(http as any);
//   });
//
//   describe('Test: buildHeader', () => {
//     it('should be defined', () => {
//       expect(service.buildHeader()).toBeDefined();
//     });
//   });
//
//   describe('Test: jwtToken', () => {
//     it('should be defined', () => {
//       service.jwtToken = 'fakeToken';
//       expect(service.jwtToken).toBeDefined();
//     });
//   });
//
//   describe('Test: saveExpense', () => {
//     // it('should save new expense', done => {
//     //   const httpMock = {
//     //     post: jest.fn().mockReturnValue(of(responseTrue))
//     //   }
//     //   const serviceMock = new ExpenseService(httpMock as any);
//     //   serviceMock.saveExpense(usrId, mockExpense).subscribe((data) => {
//     //     expect(httpMock.post).toBeDefined();
//     //     expect(httpMock.post).toHaveBeenCalled();
//     //     // @ts-ignore
//     //     expect(data).toEqual(responseTrue);
//     //     done();
//     //   })
//     //
//     // });
//   });
//
//   describe('Test: getExpense', () => {
//     it('should return a expense', done => {
//       const usrId = '123';
//       const mockExpense = {
//         report: 'opt1'
//       };
//
//       const response = {
//         success: true,
//         data: {}
//       };
//       const httpMock = {
//         post: jest.fn().mockReturnValue(of(response))
//       }
//
//       const serviceMock = new ExpenseService(httpMock as any);
//       serviceMock.getExpenses(usrId, mockExpense).subscribe((data: any) => {
//         expect(httpMock.post).toBeDefined();
//         expect(httpMock.post).toHaveBeenCalled();
//         expect(data).toEqual(response);
//         done();
//       })
//
//     });
//   });
//
//   describe('Test: getExpenseTotal', () => {
//     it('should return expense total', done => {
//       const mockExpense = {
//         report: 'opt1'
//       };
//       const response = {
//         success: true,
//         data: {}
//       };
//
//       const httpMock = {
//         post: jest.fn().mockReturnValue(of(response))
//       };
//
//
//     });
//   });
//
//   describe('Test: getExpense', () => {
//     it('should return expense', done => {
//       const response = {
//         success: true,
//         data: {}
//       };
//
//       const httpMock = {
//         get: jest.fn().mockReturnValue(of(response))
//       };
//     });
//   });
//   describe('Test: delExpense', () => {
//     it('should delete expense', done => {
//       const response = {
//         success: true,
//         message: 'Expense removed successfully'
//       };
//
//     });
//   });
// });
