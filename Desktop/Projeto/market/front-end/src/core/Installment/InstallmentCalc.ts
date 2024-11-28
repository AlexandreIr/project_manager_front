import { MAX_INSTALLMENTS, MONTLY_INTEREST_RATE } from "../constants";
import Installment from "./installment";

export default class InstallmentCalc {
    run (
        value: number,
        installmentQtd: number = MAX_INSTALLMENTS,
        interestRate: number = MONTLY_INTEREST_RATE,
    ): Installment {
        if(installmentQtd<2 || installmentQtd>MAX_INSTALLMENTS) {
            throw new Error('Quantidade de parcelas insuficiente');
        }

        const totalWInterest = this.calculateCompoundinterest(value, installmentQtd, interestRate);

        return {
            installmentValue: this.withTwoDecimals(totalWInterest)/installmentQtd,
            totalValue: this.withTwoDecimals(totalWInterest),
            installmentQtt:installmentQtd,
            interestRate
        }
    }

    private calculateCompoundinterest(value:number, installmentQtd:number, montlyInterestRate:number):number{
        return value*Math.pow(1+montlyInterestRate, installmentQtd);
    }

    private withTwoDecimals (value:number):number{
        return Math.round(value*100)/100;
    }
}