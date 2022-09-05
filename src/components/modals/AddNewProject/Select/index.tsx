import React, { FC, useState } from 'react';
import styles from '../AddNewProject.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { optionsIF } from '../index';
import { useTranslation } from 'react-i18next';

interface PropsTypeClient {
    data: optionsIF[];
    prompt: any;
    setState: React.Dispatch<React.SetStateAction<optionsIF[] | optionsIF>>;
}
const Select: FC<PropsTypeClient> = ({ data, prompt, setState }) => {
    const [open, setOpen] = useState<boolean>(true);
    const { t } = useTranslation();

    return (
        <div
            className={
                prompt.label === t('description.selectProjectStatus')
                    ? `${styles.selectField} ${styles.selectProjectStatusField}`
                    : styles.selectField
            }
        >
            <div className={styles.control}>
                <div className={styles.selectedValue}>{prompt.label}</div>
                <FontAwesomeIcon
                    icon={faCaretDown}
                    onClick={() => {
                        setOpen((prev) => !prev);
                    }}
                />
            </div>
            {!open && (
                <div className={styles.options}>
                    {data.map((option: optionsIF) => {
                        return (
                            <div
                                key={option.id}
                                onClick={() => {
                                    setState(option);
                                }}
                            >
                                {option.label}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Select;
