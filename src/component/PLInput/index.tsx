import React, { useState, useEffect, FC, useRef } from 'react';
import './style.sass';
import CallbackMessage, { PLCallbackMessageProps } from '../CallbackMessage';

export interface PLInputOptionProps {
    rules?: PLValidationRuleProps[],
}

export interface PLValidationRuleProps {
    message: string,
    level?: 'danger' | 'warning',
    patern?: RegExp,
    maxLength?: number,
    minLength?: number,
    // type?: 'email' //extendable
}

type Props = {
    holderLabel?: string,
    options?: PLInputOptionProps,
} & React.InputHTMLAttributes<any>

const PLInput: FC<Props> = (props) => {

    const inputRef = useRef<any>(null);

    const { options, holderLabel, placeholder, onChange, ...inputProps } = props

    const [msgOption, setMsgOption] = useState<PLCallbackMessageProps>({
        show: false,
        type: 'warning',
        message: 'message'
    })

    const [Value, setValue] = useState<string | number | string[]>(inputProps.value || inputProps.defaultValue || "")

    useEffect(() => {
        if (hasRule()) {
            for (const _rule of options!.rules!) {
                // must have message
                if (!!_rule.message === false) console.warn('Rule that need message!')
                const valid = checkValidate(_rule, Value)
                if (!valid) {
                    setMsgOption({
                        show: true,
                        type: _rule.level || 'danger',
                        message: _rule.message
                    })
                    return
                } else {
                    setMsgOption(pre => ({
                        ...pre,
                        show: false
                    }))
                }
            }
        }
    }, [Value])

    //check if it has rule options.
    const hasRule = () => !!options && !!options.rules && options.rules.length > 0

    const checkValidate = (rule: PLValidationRuleProps, value: string | number | string[]) => {
        for (const key in rule) {
            switch (key) {
                case "patern":
                    return rule.patern!.test(value.toString());
                case "maxLength":
                    return rule.maxLength! >= value.toString().length;
                case "minLength":
                    return rule.minLength! <= value.toString().length;
                case "message":
                    break
                case "level":
                    break
                // case "type":
                //     return 
                default:
                    console.error("rule is not valid")
                    break
            }
        }
    }

    return (
        <div className={`pl-input-container ${msgOption.show ? msgOption.type : ''}`}>
            <input
                {...inputProps}
                placeholder={typeof holderLabel === 'string' ? undefined : placeholder}  // holderLabel is priorty
                ref={inputRef}
                className="pl-input"
                onChange={e => {
                    setValue(e.target.value)
                    // console.log(e.target.value);
                    onChange && onChange(e)
                }} />

            {
                props.holderLabel &&
                <span className={`pl-input-placeholder ${Value.toString().length > 0 ? 'offset-up' : ''}`} onClick={() => (inputRef.current as HTMLInputElement).focus()}>
                    {props.holderLabel}
                </span>
            }
            {
                options && options.rules && options.rules.length > 0 &&
                <CallbackMessage {...msgOption} />
            }

        </div>
    )
}

export default PLInput