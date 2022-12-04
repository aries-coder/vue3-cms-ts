import { FormRules, FormItemRule } from 'naive-ui'
export default function () {
  const rules: FormRules = {
    name: [
      {
        required: true,
        validator(rule: FormItemRule, value: string) {
          if (!value) {
            return new Error('账号不得为空')
          }
          return true
        },
        trigger: ['input', 'blur']
      }
    ],
    password: [
      {
        required: true,
        validator(rule: FormItemRule, value: string) {
          if (!value) {
            return new Error('密码不得为空')
          }
          return true
        },
        trigger: ['input', 'blur']
      }
    ]
  }

  return rules
}
