import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import emailjs from '@emailjs/browser';

const Contact = () => {

    const [checkboxes, setCheckboxes] = useState(
        [
            {
                stairs: false,
                floor: false,
                dressing: false,
                kitchen: false,
                inside: false,
                intOthers: false
            },
            {
                windows: false,
                doors: false,
                gate: false,
                shutters: false,
                outside: false,
                outOthers: false
            }
        ]
    );

    useEffect(() => {
        console.log(checkboxes);
    }, [checkboxes])

    const schema = yup
        .object(
            {
                lastName: yup
                    .string()
                    .max(50)
                    .required("Merci de rentrer votre nom"),
                email: yup
                    .string()
                    .email("Merci de rentrer une adresse mail valide")
                    .max(255)
                    .required("Merci de rentrer une adresse mail"),
                phone: yup
                    .number()
                    .typeError("Merci de rentrer un numéro de téléphone valide")
                    .required("Merci de rentrer un numéro de téléphone")
            }
        )
        .required();

    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    function resetForm() {

        document.getElementById("contact-form").reset();

        setCheckboxes(
            [
                {
                    stairs: false,
                    floor: false,
                    dressing: false,
                    kitchen: false,
                    inside: false,
                    intOthers: false
                },
                {
                    windows: false,
                    doors: false,
                    gate: false,
                    shutters: false,
                    outside: false,
                    outOthers: false
                }
            ]
        )
    }

    function onSubmit(data) {
        
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const serviceId = process.env.REACT_APP_SERVICE_ID;
        let insideWork = [];
        let outsideWork = [];

        // Checkboxes travaux d'intérieur
        if(checkboxes[0].stairs) insideWork.push('escaliers');   
        if(checkboxes[0].floor) insideWork.push('parquet');     
        if(checkboxes[0].kitchen) insideWork.push('cuisine');
        if(checkboxes[0].dressing) insideWork.push('dressing');
        if(checkboxes[0].inside) insideWork.push("aménagements intérieur");
        if(checkboxes[0].intOthers) insideWork.push('autre (intérieur)');
        if(insideWork.length === 0) insideWork = ["aucun travaux d'intérieur demandé"];

        // Checkboxes travaux d'extérieur
        if(checkboxes[1].windows) outsideWork.push('fenêtres');
        if(checkboxes[1].doors) outsideWork.push('portes');
        if(checkboxes[1].gate) outsideWork.push('portail');
        if(checkboxes[1].shutters) outsideWork.push('volets');
        if(checkboxes[1].outside) outsideWork.push("aménagements extérieur");
        if(checkboxes[1].outOthers) outsideWork.push('autre (extérieur)');
        if(outsideWork.length === 0) outsideWork = ["aucun travaux d'extérieur demandé"];

        insideWork = JSON.stringify(insideWork);
        outsideWork = JSON.stringify(outsideWork);

        console.log(insideWork);
        
        insideWork = insideWork.replace('[', '').replace(/"/g, '').replace(']', '');
        outsideWork = outsideWork.replace('[', '').replace(/"/g, '').replace(']', '');

        sendFeedback(serviceId, templateId, {
            // Obligatoires
            lastName: data.lastName,
            firstName: data.firstName,
            email: data.email,
            phone: data.phone,

            // Facultatifs
            postalCode: data.postalCode,
            adress: data.adress,
            city: data.city,
            message: data.message,

            // Travaux demandés
            insideWork: insideWork,
            outsideWork: outsideWork
        })

        resetForm();

    };

    function sendFeedback(serviceId, templateId, variables) {
        if (window.confirm('Êtes-vous sûr(e) de vouloir envoyer le message ?')) {
            emailjs
            .send(serviceId, templateId, variables, process.env.REACT_APP_EMAILJS_KEY)
            .then((res) => {
                alert('votre demande a bien été envoyée !');
                console.log('Email envoyé !');
            })
            .catch((err) => {
                console.error('Erreur');
            })
        }
        
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} id='contact-form'>
            <h4>Informations personnelles</h4>
            <div className="left-column">
                <div className='input-container'>
                    <label htmlFor="lastName">Nom : *</label>
                    {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder='Votre nom'
                        {...register('lastName')}
                        />  
                </div>
                <div className='input-container'>
                    <label htmlFor="firstName">Prénom :</label>
                    {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder='Votre prénom'
                        {...register('firstName')} 
                        />
                </div>
                <div className='input-container'>
                    <label htmlFor="mail">e-mail&nbsp;: *</label>
                    {errors.email && <p className='error-msg'>{errors.email.message}</p>}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Votre e-mail'
                        {...register('email')}
                        />
                </div>
                <div className='input-container'>
                    <label htmlFor="phone">Téléphone : *</label>
                    {errors.phone && <p className='error-msg'>{errors.phone.message}</p>}
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder='Portable ou fixe'
                        {...register('phone')}
                        />
                </div>
            </div>
            <div className="right-column">
                <div className='input-container'>
                    <label htmlFor="postalCode">Code Postal :</label>
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        placeholder='Votre code postal'
                        {...register('postalCode')} />
                </div>
                <div className='input-container'>
                    <label htmlFor="adress">Adresse :</label>
                    <input
                        type="text"
                        id="adress"
                        name="adress"
                        placeholder='Votre adresse'
                        {...register('adress')} />
                </div>
                <div className='input-container'>
                    <label htmlFor="city">Ville :</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder='Votre ville'
                        {...register('city')} />
                </div>
            </div>
            <h4>Réalisation(s) souhaitée(s)</h4>
            <div className="wishes-container">
                <div className="inside-choices">
                    <h5>INTÉRIEUR</h5>
                    <div className="inside-inputs">
                        <div>
                            <input 
                                type="checkbox" 
                                name='stairs' 
                                id='stairs'
                                // {...register('stairs')}
                                onClick={() => 
                                    setCheckboxes(
                                        [
                                            {...checkboxes[0], stairs : !checkboxes[0].stairs},
                                            {...checkboxes[1]}
                                        ]
                                    )
                                }
                                // defaultChecked={false} 
                                />
                            <label htmlFor="stairs">Escalier</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                name='floor' 
                                id='floor'
                                // {...register('floor')}
                                onClick={() => 
                                    setCheckboxes(
                                        [
                                            {...checkboxes[0], floor : !checkboxes[0].floor},
                                            {...checkboxes[1]}
                                        ]
                                    )
                                }
                                // defaultChecked={false} 
                                />
                            <label htmlFor="floor">Parquet</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                name='dressing' 
                                id='dressing'
                                // {...register('dressing')}
                                onClick={() => 
                                    setCheckboxes(
                                        [
                                            {...checkboxes[0], dressing : !checkboxes[0].dressing},
                                            {...checkboxes[1]}
                                        ]
                                    )
                                }
                                // defaultChecked={false} 
                                />
                            <label htmlFor="dressing">Dressing</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                name='kitchen' 
                                id='kitchen'
                                // {...register('kitchen')}
                                onClick={() => 
                                    setCheckboxes(
                                        [
                                            {...checkboxes[0], kitchen : !checkboxes[0].kitchen},
                                            {...checkboxes[1]}
                                        ]
                                    )
                                }
                                // defaultChecked={false} 
                                />
                            <label htmlFor="kitchen">Cuisine</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                name='inside' 
                                id='inside'
                                // {...register('inside')}
                                onClick={() => 
                                    setCheckboxes(
                                        [
                                            {...checkboxes[0], inside : !checkboxes[0].inside},
                                            {...checkboxes[1]}
                                        ]
                                    )
                                }
                                // defaultChecked={false} 
                                />
                            <label htmlFor='inside'>Aménagement intérieur</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                name='intOthers' 
                                id='intOthers'
                                // {...register('intOthers')}
                                onClick={() => 
                                    setCheckboxes(
                                        [
                                            {...checkboxes[0], intOthers : !checkboxes[0].intOthers},
                                            {...checkboxes[1]}
                                        ]
                                    )
                                }
                                // defaultChecked={false} 
                                />
                            <label htmlFor="intOthers">Autre (préciser)</label>
                        </div>
                        <textarea name="" id="" cols="20" rows="10"></textarea>
                    </div>
                </div>

                <div className="outside-choices">
                    <h5>EXTÉRIEUR</h5>
                    <div className="outside-inputs">
                        <div>
                            <input 
                                type="checkbox" 
                                name='windows'
                                id='windows'
                                // {...register('windows')}
                                onClick={() => 
                                    setCheckboxes(
                                        [
                                            {...checkboxes[0]},
                                            {...checkboxes[1], windows : !checkboxes[1].windows}
                                        ]
                                    )
                                }
                                // defaultChecked={false} 
                                 />
                            <label htmlFor="windows">Fenêtres</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                name='doors' 
                                id='doors'
                                // {...register('doors')}
                                onClick={() => 
                                    setCheckboxes(
                                        [
                                            {...checkboxes[0]},
                                            {...checkboxes[1], doors : !checkboxes[1].doors}
                                        ]
                                    )
                                }
                                // defaultChecked={false} 
                                 />
                            <label htmlFor='doors'>Portes</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                name='gate' 
                                id='gate'
                                // {...register('gate')}
                                onClick={() => 
                                    setCheckboxes(
                                        [
                                            {...checkboxes[0]},
                                            {...checkboxes[1], gate : !checkboxes[1].gate}
                                        ]
                                    )
                                }
                                // defaultChecked={false} 
                                 />
                            <label htmlFor="gate">Portail</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                name='shutters' 
                                id='shutters'
                                // {...register('shutters')}
                                onClick={() => 
                                    setCheckboxes(
                                        [
                                            {...checkboxes[0]},
                                            {...checkboxes[1], shutters : !checkboxes[1].shutters}
                                        ]
                                    )
                                }
                                // defaultChecked={false} 
                                 />
                            <label htmlFor="shutters">Volets</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                name='outside' 
                                id='outside'
                                // {...register('outside')}
                                onClick={() => 
                                    setCheckboxes(
                                        [
                                            {...checkboxes[0]},
                                            {...checkboxes[1], outside : !checkboxes[1].outside}
                                        ]
                                    )
                                }
                                // defaultChecked={false} 
                                 />
                            <label htmlFor="outside">Aménagement extérieur</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                name='outOthers'
                                id='outOthers'
                                // {...register('outOthers')}
                                onClick={() => 
                                    setCheckboxes(
                                        [
                                            {...checkboxes[0]},
                                            {...checkboxes[1], outOthers : !checkboxes[1].outOthers}
                                        ]
                                    )
                                }
                                // defaultChecked={false} 
                                 />
                            <label htmlFor="outOthers">Autre (préciser)</label>
                        </div>

                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>

            </div>
            <h4>Informations complémentaires</h4>
            <div className="message-container">
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Une question particulière, un bois demandé en particulier ? N'hésitez pas à nous faire parvenir toute demande."
                    {...register('message')}>
                </textarea>
            </div>
            <div className="btn-container">
                <input type="submit" value="Envoyer !" />
            </div>
        </form>
    );
};

export default Contact;