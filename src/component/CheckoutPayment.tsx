import StyledH3 from '@/style/StyledH3.styles';
import SubTitle from '@/style/SubTitle.styles';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  billing: {
    name: string;
    email: string;
    phone: string;
  };
  shipping: {
    address: string;
    zipCode: string;
    city: string;
    country: string;
  };
  payment: {
    paymentMethod: string;
    emoneyNumber: string;
    emoneyPin: string;
  };
}

function CheckoutPayment() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <StyledH3>Checkout</StyledH3>
            <section>
                <SubTitle>Billing Details</SubTitle>
                <div>
                    <label>Name</label>
                    <input {...register('billing.name', { required: 'Name is required' })} />
                    {errors.billing?.name && <p>{errors.billing.name.message}</p>}
                </div>
                <div>
                    <label>Email Address</label>
                    <input {...register('billing.email', { required: 'Email is required' })} />
                    {errors.billing?.email && <p>{errors.billing.email.message}</p>}
                </div>
                <div>
                    <label>Phone Number</label>
                    <input {...register('billing.phone', { required: 'Phone number is required' })} />
                    {errors.billing?.phone && <p>{errors.billing.phone.message}</p>}
                </div>
            </section>

            {/* <section>
        <h2>Shipping Info</h2>
        <div>
          <label>Address</label>
          <input {...register('shipping.address', { required: 'Address is required' })} />
          {errors.shipping?.address && <p>{errors.shipping.address.message}</p>}
        </div>
        <div>
          <label>Zip Code</label>
          <input {...register('shipping.zipCode', { required: 'Zip code is required' })} />
          {errors.shipping?.zipCode && <p>{errors.shipping.zipCode.message}</p>}
        </div>
        <div>
          <label>City</label>
          <input {...register('shipping.city', { required: 'City is required' })} />
          {errors.shipping?.city && <p>{errors.shipping.city.message}</p>}
        </div>
        <div>
          <label>Country</label>
          <input {...register('shipping.country', { required: 'Country is required' })} />
          {errors.shipping?.country && <p>{errors.shipping.country.message}</p>}
        </div>
      </section> */}

            {/* <section>
        <h2>Payment</h2>
        <div>
          <label>Payment Method</label>
          <div>
            <Controller
              name="payment.paymentMethod"
              control={control}
              defaultValue=""
              rules={{ required: 'Payment method is required' }}
              render={({ field }) => (
                <div>
                  <label>
                    <input type="radio" {...field} value="e-money" /> E-Money
                  </label>
                  <label>
                    <input type="radio" {...field} value="cash-on-delivery" /> Cash on Delivery
                  </label>
                </div>
              }
            />
          </div>
          {errors.payment?.paymentMethod && <p>{errors.payment.paymentMethod.message}</p>}
        </div>
        {control.getValues('payment.paymentMethod') === 'e-money' && (
          <div>
            <div>
              <label>E-Money Number</label>
              <input {...register('payment.emoneyNumber', { required: 'E-Money number is required' })} />
              {errors.payment?.emoneyNumber && <p>{errors.payment.emoneyNumber.message}</p>}
            </div>
            <div>
              <label>E-Money Pin</label>
              <input {...register('payment.emoneyPin', { required: 'E-Money pin is required' })} />
              {errors.payment?.emoneyPin && <p>{errors.payment.emoneyPin.message}</p>}
            </div>
          </div>
        )}
      </section> */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default CheckoutPayment;
