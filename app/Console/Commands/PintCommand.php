<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Process\Process;

class PintCommand extends Command
{
    protected $signature = 'pint';

    protected $description = 'Run Laravel Pint';

    public function handle()
    {
        $process = new Process([base_path('vendor/bin/pint')]);
        $process->setTimeout(null);
        $process->run(fn ($type, $output) => $this->output->write($output));

        return $process->isSuccessful()
            ? Command::SUCCESS
            : Command::FAILURE;
    }
}
