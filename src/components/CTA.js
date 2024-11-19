import { Button } from "primereact/button"

export default function CTA() {
    return (
        <div>
            <div className="px-6 py-20 md:px-12 lg:px-20">
                <div className="text-center">
                    <div className="text-primary font-bold mb-4"><i className="pi pi-discord" />&nbsp;POWERED BY DISCORD</div>
                    <div className="font-bold text-5xl mb-4">Join Our Design Community</div>
                    <div className="text-2xl mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
                    <Button label="Join Now" icon="pi pi-discord" raised rounded className="font-bold p-2 px-5" />
                </div>
            </div>
        </div>
    )
}