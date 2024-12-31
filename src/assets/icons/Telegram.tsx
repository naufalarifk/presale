import { Icon } from "./types"

const Telegram = ({ height = '24', width = '25' }: Icon) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 24" fill="none">
            <path d="M21.5 5L2.5 12.5L9.5 13.5M21.5 5L19 20L9.5 13.5M21.5 5L9.5 13.5M9.5 13.5V19L12.749 15.723" stroke="#FBFCFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default Telegram