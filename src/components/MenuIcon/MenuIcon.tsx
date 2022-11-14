import {icons, MenuIconProps} from "./MenuIcon.props";
import styles from "./MenuIcon.module.css"
import cn from "classnames";


export const MenuIcon = ({icon,appearance, className, ...props}: MenuIconProps): JSX.Element => {

    const  IconComp = icons[icon]
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.white]: appearance === 'white'
        })}
                {...props}
        >
            <IconComp size={30}/>
        </button>
    );
};

