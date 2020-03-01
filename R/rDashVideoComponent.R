# AUTO GENERATED FILE - DO NOT EDIT

rDashVideoComponent <- function(id=NULL, source=NULL, fluid=NULL, width=NULL, height=NULL, autoPlay=NULL, state=NULL, time=NULL) {
    
    props <- list(id=id, source=source, fluid=fluid, width=width, height=height, autoPlay=autoPlay, state=state, time=time)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashVideoComponent',
        namespace = 'dash_video_component',
        propNames = c('id', 'source', 'fluid', 'width', 'height', 'autoPlay', 'state', 'time'),
        package = 'dashVideoComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
