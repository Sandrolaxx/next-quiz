import { ButtonProps } from "../../utils/types";
import style from "../../styles/Button.module.css";
import Link from "next/link";

export default function Button({ text, href, onClick }: ButtonProps) {
    function renderButton() {
        return (
            <button className={style.container} onClick={onClick}>
                {text}
            </button>
        );
    }

    return (
        href ?
            <Link href={href} passHref >
                {renderButton()}
            </Link>
            :
            renderButton()
    );
}