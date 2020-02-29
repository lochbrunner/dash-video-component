# AUTO GENERATED FILE - DO NOT EDIT

rDashVideoComponent <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashVideoComponent',
        namespace = 'dash_video_component',
        propNames = c('id', 'label', 'value'),
        package = 'dashVideoComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
