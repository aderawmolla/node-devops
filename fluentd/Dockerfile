# Use the Fluentd image as the base image
FROM fluent/fluentd:edge-debian

# Switch to root user to install required system packages and plugins
USER root

# Update package lists and install necessary dependencies for building gems
RUN apt-get update && apt-get install -y \
    build-essential \
    libcurl4-openssl-dev \
    libffi-dev \
    libssl-dev \
    libyaml-dev \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install the OpenSearch plugin for Fluentd
RUN fluent-gem install fluent-plugin-opensearch --no-document

# Change the user back to fluent for security purposes
USER fluent
