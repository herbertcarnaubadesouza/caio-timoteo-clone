"use client"
import { useRef } from "react"
import Link from "next/link";
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ToastContainer, toast } from "react-toastify"
import { phoneFormatMask } from "@/utils/formatters"
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import styles from "./styles.module.css";

const schema = yup.object({
    user_completeName:
      yup
        .string()
        .matches(/^[A-Za-z ]*$/, "Por favor, insira um nome válido.")
        .min(3, "Por favor, insira seu nome corretamente.")
        .max(30, "Por favor, insira seu nome corretamente.")
        .required("O campo nome é obrigatório."),
    user_email:
      yup
        .string()
        .email('Por favor, insira um e-mail válido.')
        .required("O campo e-mail é obrigatório."),
    user_phone:
      yup
        .string()
        .min(14,'Por favor, insira um número telefônico válido.')
        .max(15, "Por favor, insira um número telefônico válido.")
        .required("O campo número telefônico é obrigatório."),
    user_message:
      yup
        .string()
        .required("O campo mensagem é obrigatório."),
}).required()

export const ContactForm = () => {
    const formRef = useRef()
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const apiKey = process.env.NEXT_PUBLIC_EMAILJS_API_KEY

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async () => {
        try {
            await emailjs.sendForm(serviceId, templateId, formRef.current, apiKey)

            toast.success('Mensagem enviada com sucesso, em breve entraremos em contato.', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            })
      
            reset()
          } catch (error) {
            toast.error('Houve um erro ao enviar sua mensagem, tente novamente.', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            })
            alert("catch")
          }
    }

    return (
        <section className={styles.contactform_section}>
            <div className={styles.contactform_wrapper}>
                <div className={styles.contactform_texts}>
                    <div>
                        <h3>
                            Vamos fazer um projeto juntos
                        </h3>
                        <p>
                            Monomito Filmes
                        </p>
                        <p>
                            Itaim Paulista / SP
                        </p>
                        <p>
                            CNPJ 29.792.874/0001-00
                        </p>
                    </div>
                    <div className={styles.contactform_texts_completeAdress}>
                        <p>
                        Rua Ilha de São Francisco, 283 - Itaim Paulista, São Paulo - SP, 08110-310
                        </p>
                    </div>
                    <div>
                        <p>
                            <Link href="https://api.whatsapp.com/send/?phone=5511930809909&text&type=phone_number&app_absent=0">
                                +55 (11) 98182-2930
                            </Link>
                        </p>
                    </div>
                </div>
                <div className={styles.contactform_form}>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Nome completo"
                                {...register("user_completeName")}
                            />
                            {errors.user_completeName && (
                                <p className={styles.error_message}>
                                    <MdOutlineReportGmailerrorred />
                                    {errors.user_completeName.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="E-mail"
                                {...register("user_email")}
                            />
                            {errors.user_email && (
                                <p className={styles.error_message}>
                                    <MdOutlineReportGmailerrorred />
                                    {errors.user_email.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Telefone"
                                onKeyUp={(ev) => phoneFormatMask(ev)}
                                {...register("user_phone")}
                            />
                            {errors.user_phone && (
                                <p className={styles.error_message}>
                                    <MdOutlineReportGmailerrorred />
                                    {errors.user_phone.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <textarea
                                placeholder="Deixe sua mensagem ou uma possível dúvida"
                                {...register("user_message")}
                            />
                            {errors.user_message && (
                                <p className={styles.error_message}>
                                    <MdOutlineReportGmailerrorred />
                                    {errors.user_message.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <button type="submit">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}