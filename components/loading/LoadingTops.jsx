const LoadingTops = () => {
    let mapping = [{}, {}, {}, {}]
    return mapping.map((element, key) => (
        <div className="skeleton-animation top loading" key={key}>
            <div className="photo"></div>
            <div className="info">
                <p className="username"></p>
                <span></span>
                <span></span>
            </div>
        </div>

    ))

}

export default LoadingTops