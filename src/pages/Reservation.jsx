import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Reservation.css';

const Reservation = ({serviceName,serviceDate = '',serviceTime='',serviceDuration = '',servicePayment, servicePrice,backToServiceCard}) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')

    const handlePaymentMethodClick = (method) => {
        setSelectedPaymentMethod(method);
    };

    return (
        <main className='main-formreservation'>
            <section className='section-formreservation'>
                <aside className='details-formreservation'>
                    
                    <h2>Detalles de servicio</h2>
                    
                </aside>

                <div className='form-formreservation-children'>
                <form className='form-formreservation'>
                    <div className='name-formreservation' >
                        <div className='name-email-formresservation'>
                        <label htmlFor='name-input' className='label-formreservation'>
                            Name*
                        </label>
                        <input 
                            id='name-input'
                            type='text'
                            required
                        />                     
                        </div>
                        <div className='name-email-formresservation'>
                        <label htmlFor='email-input' className='label-formreservation'>
                            Email*
                        </label>
                        <input 
                            id='email-input'
                            type='email'
                            required
                        />
                        </div>
                    </div>

                    <div className='phone-formreservation'>
                        <label htmlFor='phone-input' className='label-formreservation'>
                            Phone number
                        </label>
                        <input 
                            id='phone-input'
                            type='text'
                        />
                        <p>Add a message</p>
                        <textarea className='textarea-formreservation'></textarea>
                    </div>

                    <div className='payment-formreservation'>
                        <h3>Payment</h3>
                       {/*} <p>Service name</p>*/}
                       <div className='methodpayment-formreservation'>
                                {['credit-card', 'paypal', 'bank-transfer'].map((method) => (
                                    <div className='payment-formreservation' key={method}>
                                        <p
                                            onClick={() => handlePaymentMethodClick(method)}
                                            className={selectedPaymentMethod === method ? 'selected' : ''}
                                        >
                                            {method}
                                        </p>
                                    </div>
                                ))}
                            </div>
                    </div>
                    
                </form>       
                <div className='data-formreservation'>
                    <div className='data-formreservation-details'>
                    <h3>Reservation details</h3>
                    <p>Service name: {serviceName} </p>
                    <p>Date: {serviceDate} </p>
                    <p>Time: {serviceTime} </p>
                    <p>Duration: {serviceDuration} min </p>
                    </div>
                    <h3>Payment details</h3>
                    <div className='price-formreservation'>
                        <p className='price'>Total</p>
                        <p className='amount'>{servicePrice} €</p>
                    </div>
                    <div className='buttons-formreservation'>
                    <button className='addbutton-formreservation'>Add to cart</button>
                    <button className='addbutton-formreservation'>Checkout</button>
                    <Link to={'/services'}><button className='addbutton-formreservation'>Continue shopping</button></Link>
                    <button className='addbutton-formreservation' onClick={() => backToServiceCard(true)} >Back</button>

                    </div>
                  </div>
                </div>
                <h4>The fields marked with (*) are required</h4>
            </section>
        </main>
    );
}

export default Reservation;
