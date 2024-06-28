import {Checkbox} from "@headlessui/react";
import {CheckIcon} from "@heroicons/react/16/solid";
import {classNames} from "../../../shared/helpers/classNames";
import classes from "../../ExpandableFilters/ui/ExpandableFilters.module.scss";
import {HStack} from "../../../shared/UI/Stack";

interface CheckBoxItemProps {
    checked: boolean
    onChange: () => void
    name: string
    checkedMode: boolean
}

export const CheckBoxItem = (props: CheckBoxItemProps) => {
    const {checked, onChange, name, checkedMode } = props

    return (
        <Checkbox
            checked={checked}
            onChange={onChange}
        >
            <HStack gap='5' align='center'>
                <CheckIcon
                    className={
                        classNames(classes.checkbox,
                            {[classes.checked]: checkedMode},
                            [])
                    }
                />
                <h5>{name}</h5>
            </HStack>
        </Checkbox>
    )
}