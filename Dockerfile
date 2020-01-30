FROM node:10-alpine

LABEL "name"="commit-nums-today Action"
LABEL "maintainer"="yiliang114"
LABEL "version"="0.0.1"

LABEL "com.github.actions.name"="Sum Commit Action"
LABEL "com.github.actions.description"="get someone commit numbers today"
LABEL "com.github.actions.icon"="aperture"
LABEL "com.github.actions.color"="purple"

COPY . .
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]