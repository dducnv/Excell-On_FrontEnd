import React from 'react'
import orderApi from '../../../api/orderApi';
import toast, { Toaster } from 'react-hot-toast';
import {
    PayPalScriptProvider, PayPalButtons
  } from "@paypal/react-paypal-js";
  const initialOptions = {
    "client-id": "ActIp1UIyOlXIu-O93eV2Gb8cfIKIeJE8g_sp3WjZFUDkaQ6Cf2KqE5kSrFamz4XVeRQIMr7xTPeyD-S",
    currency: "USD",
    intent: "capture",
  };
const PaypalButtonComponent = (props) => {
  return (
      <>
      <Toaster/>
      
        <PayPalScriptProvider options={{ "client-id": "AfGLbRweGTWUtjBVKy2qicCK94pTS5wyYVPLhHUVFp5n9siQ9MToXnxGxR2BlmCIc98g5x4E6BbWAVDJ" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: props.InDebt,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        if (details.status === "COMPLETED") {
                            const result = orderApi.paymentOrder(props.ContractID, props.InDebt).then(res => {
                              if (res.status == 200) {
                                  props.modalHiden(false);
                                return true;
                              } else {
                                return false;
                              }
                            }).catch(err => {
                              return false;
                            });
          
                            toast.promise(
                              result,
                              {
                                loading: 'Paying...',
                                success: <b>Payment success!</b>,
                                error: <b>Error System.</b>,
                              }
                            );
                          } else {
                            toast.error("Payment Error.")
                          }
                    });
                }}
            />
        </PayPalScriptProvider>
      </>
   
  )
}

export default PaypalButtonComponent