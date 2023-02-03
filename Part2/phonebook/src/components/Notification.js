const Notification = ({ message, type }) => {
    if (message === null) {
        return null;
    }

    return (
        <div className={type === 'error' ? 'errorMessage message' : 'successMessage message'}>
            {message}
        </div>
    );
};

export default Notification;
