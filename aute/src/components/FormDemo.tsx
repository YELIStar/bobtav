const FormDemo: React.FC = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const count = formData.get("count");
        // await fetch("/api/save-count", { method: "POST", body: { count } });
        console.log("计数提交成功（页面未刷新）");
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <input name="count" defaultValue="0" />
            <button type="submit">提交计数</button>
        </form>
    );
};

export default FormDemo;