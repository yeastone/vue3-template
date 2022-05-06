#!/usr/bin/env bash
set -ex

. $builder_shell_path/vue-group/build.sh 14.2.0
. $builder_shell_path/docker/build.sh
. $builder_shell_path/k8s/build.sh
