% Auto-generated: do not edit by hand
\name{rDashVideoComponent}

\alias{rDashVideoComponent}

\title{DashVideoComponent component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
rDashVideoComponent(id=NULL, source=NULL, fluid=NULL, width=NULL, height=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{source}{Character. A label that will be printed when this component is rendered.}

\item{fluid}{Logical. In fluid mode, it’s 100\% wide all the time, 
the height will be calculated by the video's ratio.}

\item{width}{Numeric. The width value of video, could be an number or percent or auto.
(This attribute is effective only if you set fluid as false)}

\item{height}{Numeric. The height value of video, could be an number or percent or auto.
(This attribute is effective only if you set fluid as false)}
}
