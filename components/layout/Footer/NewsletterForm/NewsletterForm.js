import { useState } from 'react'
import { GetLanguageContext } from '../../../../context/LanguageContext'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import {
    Section,
    Content,
    Title,
    InputContainer,
    Input,
    Button,
    ButtonIcon,
    Form,
    Error,
    Msg,
} from './Elements'
import Loader from '../../../loader/Loader'

const NewsletterForm = () => {
    
    const { language } = GetLanguageContext()
    const [disabled, setDisabled] = useState(false)
    const [msg, setMsg] = useState('')

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('email required'),
        }),
        onSubmit: (values, { resetForm }) => {

            const subscribe = async () => {

                const res = await fetch('/api/subscribe', {
                    body: JSON.stringify({
                        email: values.email
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST'
                })

                const { error } = await res.json();

                resetForm()
                setDisabled(false)
                setTimeout(() => {
                    setMsg('')
                }, 3000)

                if (error) {
                    setMsg('There was an error sending the email')
                    return;
                }

                setMsg('Email was sent')

            }

            setDisabled(true)
            subscribe()

        }
    })

    return (
        <Section>
            {
                <Content>
                    <Title>Subscribe to our newsletter</Title>
                    <Form onSubmit={formik.handleSubmit}>
                        <InputContainer>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                placeholder="email"
                            />
                            <Button
                                type="submit"
                                disabled={disabled}
                                dis={disabled}
                            >
                                {
                                    disabled ?
                                        <Loader /> :
                                        <ButtonIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" /></ButtonIcon>
                                }
                            </Button>
                            {
                                formik.errors.email && <Error>{formik.errors.email}</Error>
                            }
                            {
                                msg.length > 0 && <Msg>{msg}</Msg>
                            }
                        </InputContainer>
                    </Form>
                </Content>
            }
        </Section>
    )
}

export default NewsletterForm