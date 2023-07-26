import './CopyNotification.scss'

interface CopyNotificationProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    copiedValue: string
    doShowNotification: boolean
}
export default function CopyNotification(props: CopyNotificationProps) {

    const { copiedValue, doShowNotification, ...rest } = props
    console.log(doShowNotification)

    return (
        <>
            <span>{doShowNotification}</span>
            {doShowNotification ? <div className='copy-notification' {...rest}>
                {`${copiedValue} has been copied`}
            </div> : <></>}
        </>
    )
}