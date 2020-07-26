FROM nginx:1.19

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

COPY nginx/nginx-site.conf /etc/nginx/conf.d/default.conf
COPY nginx/expires.conf /etc/nginx/conf.d/expires.conf
COPY build /app

ENV CONFIG_FILE_PATH /app

ADD ci/json_env /usr/local/bin/
COPY ci/start-container.sh /usr/local/bin/start-container
RUN chmod +x /usr/local/bin/json_env
RUN chmod +x /usr/local/bin/start-container

ENTRYPOINT ["start-container"]

CMD ["nginx"]
