FROM golang:1.14.2-buster as build
WORKDIR /go/src/app
ADD . /go/src/app
RUN go mod download
RUN go build -o /go/bin/app

FROM gcr.io/distroless/base-debian10
COPY --from=build /go/bin/app /
CMD ["/app"]
