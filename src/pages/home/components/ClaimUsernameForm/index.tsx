import { Button, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormAnnotation } from './styles'
import { useRouter } from 'next/router'

const claimUsernameFormSchema = z.object({
  usernameField: z
    .string()
    .min(3, { message: 'No mínimo 3 letras' })
    .max(20, { message: 'No máximo 20 letras' })
    .regex(/^([a-z\\-]+)$/i, { message: 'Apenas letras e hifens' })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  const router = useRouter()

  async function handleCaimUsername(data: ClaimUsernameFormData) {
    const { usernameField } = data

    await router.push(`/register?username=${usernameField}`)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleCaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuario"
          type="text"
          autoComplete="do-not-autofill"
          {...register('usernameField')}
        />
        <Button size="sm" type="submit" disabled={isSubmitted}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text>
          {errors.usernameField
            ? errors.usernameField.message
            : 'Digite o nome de usuário'}
        </Text>
      </FormAnnotation>
    </>
  )
}
