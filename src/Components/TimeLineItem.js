const TimelineItem = ({data}) => (
  <>
    {console.log('Timeline Item',data)}
    <div className="timeline-item">
      <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
        {/*<time>{data.date}</time>*/}
        <p className={'mt-4 text-center'}>{data.text}</p>
        {data.link && (
          <a
            href={data.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.link.text}
          </a>
        )}
        <span className="circle" />
      </div>
    </div>
  </>

);

export default TimelineItem