import { CreatePaymentLinkParams, TriggerMockPaymentParams } from "../types";

import { CreatePaymentLinkData, TriggerMockPaymentData } from "./types";

const createPaymentLink = ({
    amountValue,
    billerBillID,
    payeeName,
    expiryDate,
    amountExactness,
    settlement,
    validationRules,
    transactionNote,
    additionalInfo,
    campaignID,
}: CreatePaymentLinkParams): CreatePaymentLinkData => {
    return {
        amount: {
            currencyCode: "INR",
            value: amountValue,
        },
        amountExactness: amountExactness,
        billerBillID: billerBillID,
        ...(expiryDate && { expiryDate }),
        ...(payeeName && { name: payeeName }),
        ...(settlement && { settlement }),
        ...(validationRules && { validationRules }),
        ...(transactionNote && { transactionNote }),
        ...(additionalInfo && { additionalInfo }),
        ...(campaignID && { campaignID }),
    };
};

const triggerMockPayment = ({ amountValue, vpa, platformBillID }: TriggerMockPaymentParams): TriggerMockPaymentData => {
    return {
        amount: amountValue,
        destinationAccount: {
            accountID: vpa,
        },
        sourceAccount: {
            accountID: "customer@vpa",
        },
        transactionReference: platformBillID,
        type: "UPI",
    };
};

export const bodyHelpers = {
    createPaymentLink,
    triggerMockPayment,
};
