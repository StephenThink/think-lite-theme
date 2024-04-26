<?php

use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class StarterKitPostInstall
{
    public function handle($console)
    {
        if ($console->confirm('Do you want to init a git repo and configure gitignore?', true)) {
            $process = new Process(['git', 'init']);
            try {
                $process->mustRun();
                $console->info('Repo initialised.');
            } catch (ProcessFailedException $exception) {
                $console->info($exception->getMessage());
            }


                app('files')->append(base_path('.gitignore'), "\n/public/assets");

        }

        if ($console->confirm('Do you want to install npm dependencies?', true)) {
            $process = new Process(['npm', 'i']);
            try {
                $process->mustRun();
                $console->info('Dependencies installed.');

                if ($console->confirm('Do you want to run npm build?', true)) {
                    // Run npm run build
                    $buildProcess = new Process(['npm', 'run', 'build']);
                    try {
                        $buildProcess->mustRun();
                        $console->info('Build successful.');
                    } catch (ProcessFailedException $exception) {
                        $console->error('Build failed: ' . $exception->getMessage());
                    }
                }

            } catch (ProcessFailedException $exception) {
                $console->info($exception->getMessage());
            }
        }

        $console->info('<info>[✓]</info> Finished Installing!');

    }
}
