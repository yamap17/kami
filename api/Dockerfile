FROM ruby:3.1.3-alpine3.17

WORKDIR /api
COPY Gemfile* /api/

RUN apk update && \
    apk upgrade && \
    apk add --no-cache build-base gcompat openssl nodejs yarn tzdata curl git bash mysql-dev && \
    apk add --no-cache -t .build-packages --no-cache libxslt-dev libxml2-dev curl-dev mysql-client && \
    bundle install -j4 && \
    apk del --purge .build-packages

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3033

CMD ["rails", "server", "-b", "0.0.0.0"]
